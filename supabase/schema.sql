-- Database schema for Xtower (Supabase Postgres)

CREATE TABLE IF NOT EXISTS public.game_config (
  id INT PRIMARY KEY DEFAULT 1,
  vulnerability_delay_seconds INT NOT NULL DEFAULT 180,
  resource_spawn_rate FLOAT NOT NULL DEFAULT 1.0,
  rat_damage INT NOT NULL DEFAULT 15,
  next_invasion_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '7 days'),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

INSERT INTO public.game_config (id, vulnerability_delay_seconds, resource_spawn_rate, rat_damage)
VALUES (1, 180, 1.0, 15)
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.players (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  max_altitude FLOAT NOT NULL DEFAULT 0.0,
  current_altitude FLOAT NOT NULL DEFAULT 0.0,
  is_banned BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.shelters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  pos_x FLOAT NOT NULL,
  pos_y FLOAT NOT NULL,
  altitude FLOAT NOT NULL,
  hp INT NOT NULL DEFAULT 100,
  shield_active BOOLEAN NOT NULL DEFAULT TRUE,
  stored_resources JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  pos_x FLOAT NOT NULL,
  pos_y FLOAT NOT NULL,
  altitude FLOAT NOT NULL,
  amount INT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.leaderboard_weekly (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id UUID NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  max_altitude FLOAT NOT NULL,
  week_number INT NOT NULL,
  year INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.invasions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  triggered_by TEXT NOT NULL DEFAULT 'cron',
  rats_spawned INT NOT NULL DEFAULT 0,
  shelters_destroyed INT NOT NULL DEFAULT 0,
  players_knocked_down INT NOT NULL DEFAULT 0,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  reported_player_id UUID NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
