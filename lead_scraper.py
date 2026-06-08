import os
import csv
import time
import googlemaps
from dotenv import load_dotenv

load_dotenv()

# Business types in Las Vegas likely to need signs
SEARCH_QUERIES = [
    "new restaurant Las Vegas NV",
    "retail store Las Vegas NV",
    "gym fitness center Las Vegas NV",
    "hotel motel Las Vegas NV",
    "real estate office Las Vegas NV",
    "car dealership Las Vegas NV",
    "dental office Las Vegas NV",
    "construction company Las Vegas NV",
    "hair salon Las Vegas NV",
    "bar nightclub Las Vegas NV",
    "dispensary Las Vegas NV",
    "auto repair Las Vegas NV",
]

OUTPUT_FILE = "leads.csv"
MAX_RESULTS_PER_QUERY = 20


def fetch_places(client, query, max_results=MAX_RESULTS_PER_QUERY):
    places = []
    response = client.places(query=query)

    while True:
        for place in response.get("results", []):
            places.append(place)
            if len(places) >= max_results:
                return places

        next_page_token = response.get("next_page_token")
        if not next_page_token or len(places) >= max_results:
            break

        time.sleep(2)  # Google requires a short delay before using next_page_token
        response = client.places(query=query, page_token=next_page_token)

    return places


def get_place_details(client, place_id):
    fields = [
        "name",
        "formatted_address",
        "formatted_phone_number",
        "website",
        "business_status",
        "types",
        "rating",
        "user_ratings_total",
    ]
    result = client.place(place_id=place_id, fields=fields)
    return result.get("result", {})


def scrape_leads():
    api_key = os.getenv("GOOGLE_PLACES_API_KEY")
    if not api_key:
        raise ValueError("GOOGLE_PLACES_API_KEY not set in .env")

    client = googlemaps.Client(key=api_key)
    seen_ids = set()
    all_leads = []

    for query in SEARCH_QUERIES:
        print(f"Searching: {query}")
        places = fetch_places(client, query)

        for place in places:
            place_id = place.get("place_id")
            if place_id in seen_ids:
                continue
            seen_ids.add(place_id)

            details = get_place_details(client, place_id)

            lead = {
                "name": details.get("name", ""),
                "address": details.get("formatted_address", ""),
                "phone": details.get("formatted_phone_number", ""),
                "website": details.get("website", ""),
                "types": ", ".join(details.get("types", [])),
                "rating": details.get("rating", ""),
                "total_reviews": details.get("user_ratings_total", ""),
                "status": details.get("business_status", ""),
                "place_id": place_id,
            }
            all_leads.append(lead)
            print(f"  + {lead['name']} — {lead['address']}")

        time.sleep(1)

    if not all_leads:
        print("No leads found.")
        return

    with open(OUTPUT_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=all_leads[0].keys())
        writer.writeheader()
        writer.writerows(all_leads)

    print(f"\nDone. Saved {len(all_leads)} leads to {OUTPUT_FILE}")


if __name__ == "__main__":
    scrape_leads()
