import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, email, name, photoUrl } = req.body;

  const response = await fetch("https://api.velt.dev/v1/users/add", {
    method: "POST",
    headers: {
      "x-velt-api-key": process.env.VELT_API_KEY!,
      "x-velt-auth-token": process.env.VELT_AUTH_TOKEN!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        organizationId: process.env.VELT_ORG_ID,
        users: [{ userId, email, name, photoUrl }],
      },
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(result);
    return res.status(500).json({ error: result });
  }

  res.status(200).json({ success: true });
}
