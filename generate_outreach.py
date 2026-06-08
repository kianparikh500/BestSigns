import os
import csv
import anthropic
from dotenv import load_dotenv

load_dotenv()

LEADS_FILE = "leads.csv"
OUTPUT_FILE = "outreach.csv"

SYSTEM_PROMPT = """You are a sales outreach specialist for Best Signs Las Vegas, a professional sign company serving the greater Las Vegas area.

Best Signs Las Vegas specializes in:
- Storefront & building signs
- LED & illuminated signs
- Vehicle wraps & graphics
- Banners & trade show displays
- Window graphics & decals
- Real estate & construction signs
- Custom indoor/outdoor signage

Write personalized, professional cold outreach emails that:
1. Address the specific business type and their likely signage needs
2. Are concise — under 150 words
3. Have a single clear call to action (free quote or consultation)
4. Sound warm and local (Las Vegas community feel)
5. Do not sound generic or spammy

Return ONLY the email body. No subject line. No extra explanation."""


def generate_subject(client, lead):
    business_name = lead.get("name", "your business")
    prompt = (
        f"Write a compelling email subject line for a cold outreach email to {business_name} "
        f"from Best Signs Las Vegas. Make it personalized and under 60 characters. "
        f"Return ONLY the subject line, no quotes."
    )
    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=60,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text.strip().strip('"')


def generate_email_body(client, lead):
    prompt = f"""Write a cold outreach email for this Las Vegas business:

Business: {lead.get('name', '')}
Type: {lead.get('types', '')}
Location: {lead.get('address', '')}

Personalize the message based on their business type and the signage they would most benefit from."""

    message = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=350,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text.strip()


def generate_outreach():
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise ValueError("ANTHROPIC_API_KEY not set in .env")

    if not os.path.exists(LEADS_FILE):
        raise FileNotFoundError(f"{LEADS_FILE} not found — run lead_scraper.py first.")

    client = anthropic.Anthropic(api_key=api_key)

    with open(LEADS_FILE, "r", encoding="utf-8") as f:
        leads = list(csv.DictReader(f))

    print(f"Generating outreach for {len(leads)} leads...\n")

    results = []
    for i, lead in enumerate(leads, 1):
        name = lead.get("name", "Unknown")
        print(f"[{i}/{len(leads)}] {name}")

        subject = generate_subject(client, lead)
        body = generate_email_body(client, lead)

        results.append({**lead, "email_subject": subject, "email_body": body})

    if not results:
        print("No results to save.")
        return

    with open(OUTPUT_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=results[0].keys())
        writer.writeheader()
        writer.writerows(results)

    print(f"\nDone. Saved outreach emails to {OUTPUT_FILE}")


if __name__ == "__main__":
    generate_outreach()
