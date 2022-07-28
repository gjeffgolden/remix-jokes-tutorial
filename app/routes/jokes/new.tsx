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
