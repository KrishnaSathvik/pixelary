-- Batch 6b: 2 additional curated prompts (from X)
-- Run in Supabase SQL Editor (anon key cannot INSERT due to RLS)

-- 1. Mirror Selfie Evening Gown (from @eiai_picfactory)
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-mirror-selfie-evening-gown',
  'Elegant Mirror Selfie Portrait',
  'Cinematic',
  $input$Elegant woman taking a mirror selfie in a deep red evening gown in a modern bedroom$input$,
  $p$The soft morning light filters through sheer curtains behind her, casting a dreamy glow over the minimalist, modern bedroom. A cup of coffee sits beside her on the wooden floor, as if she had just woken up and decided to take a spontaneous yet utterly captivating photo.

A stunningly elegant woman sitting on a velvet ottoman in front of an ornate, gold-framed mirror, taking a provocative yet refined mirror selfie. She wears a deep red high-slit evening gown, the silky fabric pooling around her as she adjusts her pose. The plunging neckline highlights her delicate collarbones and smooth, sun-kissed skin.

Sitting with one knee raised, she lets the slit of the dress part just enough to reveal the curve of her toned thigh, her fingers lightly grazing the edge of the fabric. Her other hand elegantly holds her phone, her dark eyes locked onto the reflection with an almost hypnotic intensity. A soft, teasing smirk plays on her lips, her body language exuding quiet confidence and effortless allure.$p$,
  $w$Layers atmospheric scene-setting (morning light, coffee, sheer curtains) with precise pose direction and material details (velvet ottoman, gold-framed mirror, silky fabric) to produce editorial-quality fashion selfie photography.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'fashion', 'selfie', 'mirror', 'editorial', 'elegant', 'evening-gown']
) ON CONFLICT (id) DO NOTHING;

-- 2. Luxury Bathroom Fashion Portrait (from @jarvis_og_AI)
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-bathroom-fashion',
  'Luxury Bathroom Fashion Portrait',
  'Cinematic',
  $input$Indian woman in white satin slip dress in luxury modern bathroom$input$,
  $p$A beautiful Indian woman with a voluptuous hourglass figure, medium-tan skin, sharp attractive face, full lips with red lipstick, defined eyebrows, seductive expression, wet dark brown hair with soft waves falling over her shoulders, standing in a luxurious modern bathroom.

She is wearing a tight, shiny white satin slip dress with thin spaghetti straps, deep plunging V-neckline that reveals massive cleavage, ruched detailing on the bodice, high side slit showing her thigh. One hand resting on her hip, the other hand gently touching the dress near her waist.

Pose: slightly angled body, looking at viewer with head tilted, confident and alluring gaze.

Background: glass shower cabin with chrome handle and rain shower head, white marble walls with subtle gray veins, large mirror on the left reflecting her back, white modern toilet visible in foreground. Bright soft lighting with ceiling spotlights, clean luxurious atmosphere, photorealistic, 8k, highly detailed, sharp focus, cinematic lighting.$p$,
  $w$Structured prompt with separated sections (subject, outfit, pose, background) and specific architectural/material details (marble veins, chrome fixtures) create magazine-quality fashion photography in an unconventional setting.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'fashion', 'luxury', 'bathroom', 'photorealistic', '8k', 'indian']
) ON CONFLICT (id) DO NOTHING;
