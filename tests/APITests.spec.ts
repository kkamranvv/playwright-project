import { test, expect } from "@playwright/test";

let userId: any;

test("Get users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");

  console.log(await response.json());

  await expect(response.status).toBe(200);
});

test("Create user", async ({ request }) => {
  const response = await request.post(
    "https://reqres.in/api/users",

    {
      data: {
        name: "kamran",
        job: "tester",
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  console.log(await response.json());

  await expect(response.status).toBe(201);

  const res = await response.json();

  userId = res.id;
});

test("Update user", async ({ request }) => {
  const response = await request.put(
    "https://reqres.in/api/users/" + userId,

    {
      data: {
        name: "kamran",
        job: "frontend",
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  console.log(await response.json());

  await expect(response.status).toBe(200);
});

test("Delete user", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users" + userId);

  console.log(await response.json());

  await expect(response.status).toBe(204);
});
