# CLAUDE.md — SkillTree AI

## Project Vision

An intelligent platform that visualizes knowledge as a **Dynamic Dependency Graph**.
This is not a CRUD — it is a living map where AI orchestrates the optimal learning path, ensuring every `Skill` has solid prerequisites and a clear purpose within a `Technology`.

The technical differentiator is the application of Clean Architecture to keep business rules immutable, scalable, and easy to test — separating the domain from frameworks, databases, and AI.

---

## Monorepo Structure

```
skill-tree/
├── backend/          ← Node.js API
├── docker-compose.yml
└── CLAUDE.md
```

---

## Tech Stack

### Backend

| Tool | Purpose |
|------|---------|
| Node.js 23.x | Runtime |
| TypeScript 5.x | Language (strict mode) |
| tsx | TypeScript loader (replaces ts-node) |
| Drizzle ORM | Persistence with PostgreSQL |
| Zod | Data validation at boundaries |
| ULID | Time-sortable IDs |
| Mocha + Chai | Testing |
| ESLint 9 + Prettier | Code quality |
| pnpm | Package manager |

### Frontend (not yet defined)

- React with Zustand for global state
- React Flow or D3.js to render the knowledge graph

---

## Architecture — Clean Architecture

Layers never import inward. The database and frameworks are implementation details.

```
src/
├── core/                    ← Pure domain, no external dependencies
│   ├── entities/            ← Technology, Skill
│   ├── types/               ← Domain types (SkillStatus, Ulid, ...)
│   └── repositories/        ← Repository interfaces (contracts)
├── application/
│   └── use-cases/           ← Use cases (CreateTechnology, AddSkillToTree, ...)
└── infrastructure/
    ├── repositories/        ← Concrete implementations (InMemory, Drizzle)
    └── db/                  ← Drizzle client and schema
```

### Rules

- `core/` must not import anything from `application/` or `infrastructure/`
- Repository interfaces live in `core/repositories/`; their implementations live in `infrastructure/repositories/`
- `core/types/` only contains types that describe business concepts; HTTP or DB types belong in their respective layers
- Entities are designed around business needs, not around how they are persisted

---

## Code Conventions

### Style (Prettier)

- No semicolons
- Single quotes
- Line width: 100 characters
- Indentation: 2 spaces
- No trailing commas

### Imports

- Use `import type` for type-only imports (required by `verbatimModuleSyntax`)
- Order: `builtin → external → internal → parent → sibling → index`, with a blank line between groups
- Barrel files (`index.ts`) in each layer folder to expose only the public surface

### TypeScript

- `"moduleResolution": "Bundler"` — allows imports without `.js` extensions; do not change to `"NodeNext"`
- Full strict mode: `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`

---

## Useful Commands

```bash
# From /backend
pnpm test          # Run tests with Mocha + tsx
pnpm test:watch    # Tests in watch mode
pnpm lint          # ESLint
pnpm lint:fix      # ESLint with autofix
pnpm format        # Prettier over src/ and tests/

# Database
docker-compose up -d   # Start PostgreSQL 17
pnpm db:generate       # Generate SQL migrations from schema (never edit SQL files manually)
pnpm db:migrate        # Apply migrations to the database
pnpm db:studio         # Open Drizzle Studio
```