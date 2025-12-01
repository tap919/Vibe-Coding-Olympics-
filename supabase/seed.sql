-- Seed seasons
INSERT INTO public.seasons (name, slug, description, start_date, end_date, is_active) VALUES
('Season 1', 'season-1', 'The inaugural Vibe Coding Olympics', '2024-01-01', '2024-03-31', false),
('Season 2', 'season-2', 'Summer of Vibe', '2024-06-01', '2024-08-31', false),
('Season 3', 'season-3', 'The current season - compete now!', '2024-10-01', '2025-01-31', true);

-- Seed sponsors
INSERT INTO public.sponsors (name, logo_url, website_url, tier) VALUES
('TechCorp', 'https://placehold.co/200x100?text=TechCorp', 'https://example.com/techcorp', 'platinum'),
('DevTools Inc', 'https://placehold.co/200x100?text=DevTools', 'https://example.com/devtools', 'gold'),
('CloudHost', 'https://placehold.co/200x100?text=CloudHost', 'https://example.com/cloudhost', 'gold'),
('CodeEditor Pro', 'https://placehold.co/200x100?text=CodeEditor', 'https://example.com/codeeditor', 'silver'),
('API Gateway', 'https://placehold.co/200x100?text=APIGateway', 'https://example.com/apigateway', 'silver'),
('Debug Tool', 'https://placehold.co/200x100?text=DebugTool', 'https://example.com/debugtool', 'bronze');
