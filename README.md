# demo-site

## Run locally

Prerequisite: Docker with the Compose plugin.

1. Create your `.env` from the example (`-n` never overwrites an existing `.env`), then edit the values:

   ```sh
   cp -n .env.example .env
   ```

   `.env` must define `POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB`.

2. Build and start everything:

   ```sh
   docker compose up --build
   ```

   The `api` service starts only after the `db` healthcheck (`pg_isready`) passes.

3. Open <http://localhost:3000>. Only `web` publishes a port; `api` and `db` are reachable only inside the Compose network.

4. Optional API check:

   ```sh
   docker compose exec api wget -qO- localhost:4000/health
   ```

### Stopping: `down` vs `down -v`

- `docker compose down` stops and removes the containers and network. The `db-data` volume is **kept**, so the database contents are still there on the next `docker compose up`.
- `docker compose down -v` does the same **and deletes the `db-data` volume**. All data in PostgreSQL (menu and feedback) is permanently lost. On the next `up`, Postgres starts a brand-new empty database.

`POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB` are only read when the database is first created. Changing them in `.env` while the volume exists has no effect; run `docker compose down -v` (which erases the data) to apply new values.
