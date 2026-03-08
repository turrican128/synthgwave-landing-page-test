import { submitLead } from "../submitLead";

global.fetch = jest.fn();

describe("submitLead", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_WEBHOOK_URL = "https://hook.test/webhook";
  });

  it("POSTs name and email to the webhook URL", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    await submitLead({ name: "Alex", email: "alex@test.com" });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://hook.test/webhook",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Alex", email: "alex@test.com" }),
      })
    );
  });

  it("throws when webhook returns non-ok response", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(
      submitLead({ name: "Alex", email: "alex@test.com" })
    ).rejects.toThrow("שגיאה בשליחת הטופס");
  });

  it("throws when NEXT_PUBLIC_WEBHOOK_URL is not set", async () => {
    delete process.env.NEXT_PUBLIC_WEBHOOK_URL;

    await expect(
      submitLead({ name: "Alex", email: "alex@test.com" })
    ).rejects.toThrow("Webhook URL לא מוגדר");
  });
});
