🌍 3D Interactive Globe — React + Three.js + R3F
🤙 Welcome to the Globe That Survived 37 Errors and 2 Mental Breakdowns

This is the 3D interactive Earth that started as a simple idea and escalated into:
fighting R3F errors
wrestling Tailwind
moving India 17 times
and realizing Three.js geometry uses radians and not ✨ vibes ✨
But hey, it works now.

✨ Features (Now That Everything Actually Works)

🌀 Auto-rotating Earth (gentle, not helicopter mode anymore)
🌍 High-quality textures that make Earth look moisturized
🎯 Clickable Regions (Asia, EU, NA, SA, Africa, India)
📍 Hover highlights with smoother vibes
🔵 Blue-ish marker glow (your request vibes)
⚡ Optimized so your laptop doesn’t ascend to heaven
📱 Fully responsive — even on tiny potato phones

📸 Vibes Preview
<img width="1894" height="864" alt="Screenshot 2025-11-27 114729" src="https://github.com/user-attachments/assets/39546f4b-0f64-4059-932c-d5fb297e5075" />
<img width="794" height="597" alt="Screenshot 2025-11-19 150748" src="https://github.com/user-attachments/assets/a9d5bf9a-840c-4c70-84f9-a391e44838f5" />

🧩 Project Structure (aka The Organized Part)
/app
  /components
    GlobeCanvas.tsx      <-- chaos controller
    GlobeRealistic.tsx   <-- where magic happens
    Regions.tsx          <-- where India cried
  page.tsx
/public/textures/earth
  earth-dark.jpg
  earth-bump.jpg
  earth-specular.jpg

🏃‍♂️ Installation (Mentally Prepare First)
git clone https://github.com/GavhaneKiran/3d-homepage
cd <repo-name>

npm install
npm run dev

//Go to 👉 http://localhost:3000
If it doesn’t show the globe, rotate your monitor manually.

💥 Legendary Bugs That Tried to End This Project

Here are the actual chaos moments that built character:

❌ R3F: Div is not part of the THREE namespace
I tried adding <div> inside a Canvas like a psychopath.
Canvas said: “bro what.”

❌ Cannot redeclare exported variable 'default'
Because why have ONE default when you can have MANY and cry?

❌ Cannot find name 'onRegionHover'
I forgot to define it.
Several times.

❌ Globe too big. Then too small. Then too big again.
Every adjustment:
“bro why are you like this?”

❌ Tailwind @apply melted
Unknown at rule? Same bro… same.

❌ Textures not loading
Me: “Why is Earth black?”
Browser: “404.”
Mood: “Same.”

❌ Laptop fan screaming at 3 AM
Apologies to all nearby humans.

🧠 Future Plans (If My Brain Recovers)

Zoom without breaking the camera
Real country borders
Flight path animations
Day/Night toggle
Add Easter Egg: Find the bug that caused me pain

🤝 Contribute

Contributions welcome.
If you find a bug, congrats — you’ve joined the team.
Just don’t open an issue asking why the Earth isn’t flat.

📜 License

MIT — do whatever, just don’t summon demons with it.
