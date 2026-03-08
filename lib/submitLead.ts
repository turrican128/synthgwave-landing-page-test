export interface LeadData {
  name: string;
  email: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Webhook URL לא מוגדר");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("שגיאה בשליחת הטופס");
  }
}
