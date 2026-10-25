import { db } from "@repo/db";

// Read from the database on every request instead of at build time,
// so `next build` (and CI) doesn't need a live database.
export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await db.orm.public.User.first();

  return (
    <div>
      {user?.username}
      {user?.email}
    </div>
  );
}
