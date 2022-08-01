import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  if (typeof name !== "string" || typeof content !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, content };
  const joke = await db.joke.create({
    data: fields,
  });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokeForm() {
  return (
    <main>
      <p> Add your own hilarious joke!</p>
      <form method="post">
        <section>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <label>
            Content: <input type="text" name="content" />
          </label>
        </section>
        <section>
          <button type="submit" className="button">
            Add
          </button>
        </section>
      </form>
    </main>
  );
}
