// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title?: string;
  summary?: string;
  content?: string[];
  category?: string;
  tags?: string[];
  author?: string;
  assets?: string[];
  template_id?: number;
  error?: string;
};

/**
 * This is a mock endpoint to use while developing the website
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  // random delay before data is retrieved for testing purposes
  await new Promise((r) => setTimeout(r, 100 + Math.random() * 100));

  if (req.method !== "POST") {
    res.status(404).json({ error: "not found" });
    return;
  }

  if (req.query.id === "1")
    res.status(200).json({
      title: "TAG Heuer's Limited Edition Mario Kart Watch Costs $25,000",
      summary:
        "There's a more budget-friendly $4,300 version launching Thursday -- but neither of them are smartwatches.",
      content: [
        `
TAG Heuer has produced a Mario Kart luxury watch with Nintendo. The price tag? Well, there are two watches to choose from, depending on how accommodating your budget is: $4,300 or $25,600.

You can register now to get early access to the less expensive watch online on Thursday, or sign up for notifications for the $25,000 version. Registrations are available in the US, the UK, France, Germany, Australia, Spain, Italy, Switzerland and Japan.

"Ready to race for the finish line?" TAG Heuer asked in an Instagram post. "We're excited to announce the result of our latest Nintendo Europe collaboration: our newest TAG Heuer Formul1 1 X Mario Kart Limited Edition Chronograph."
`,
        `
The watch features a little Mario in his kart on the watch face and another engraved on the back of the watch. It also sports tiny power-ups on the date area, like the star, blue shell and mushroom; the "Mario Kart" logo inscribed along the bezel; and a black leather watch band with red stitching.

The $25,000 version has a little racing Mario, blue shell and Bullet Bill on the tri-compax dial, and a transparent back.

This isn't TAG Heuer's first Nintendo collaboration; the luxury watch brand also introduced a Super Mario version of its Connected smartwatch last year.
`,
      ],
      category: "Gaming",
      tags: ["watch", "gaming", "mario"],
      author: "Corinne Reichert",
      assets: [
        "https://cdn.motor1.com/images/mgl/BXAelv/s1/tag-heuer-formula-1-and-mario-cart-limited-edition-chronograph.jpg",
        "https://cdn.motor1.com/images/mgl/Oo10lL/s1/tag-heuer-formula-1-x-mario-cart-limited-edition-tourbillon-chronograph.jpg",
      ],
      template_id: 1,
    });
  else if (req.query.id === "2")
    res.status(200).json({
      title: "NASA's Webb Telescope Captures Dazzling View of 'Pillars of Creation'",
      summary:
        'The "Pillars of Creation," an area of intense star formation, as seen by the Near-Infrared Camera of NASA\'s James Webb Space Telescope.',
      content: [
        `
NASA's most eagle-eyed observatory yet has done it again. The James Webb Space Telescope has returned an image of the iconic "Pillars of Creation" in infrared light that is the sharpest and most detailed portrait of the spectacular star-forming region ever seen.

The ethereal scene captures translucent columns of cool interstellar gas and dust punctuated by piercing, bright points of light. Most of these are stars, and the reddish balls of fire near the edges of the pillars are newly formed stars, according to NASA.  

Don't confuse these with the deep red, magma-like areas along the inside perimeter of a few of the pillars. This is created by the turmoil of stars that are still forming and shooting supersonic jets of material out into space where they collide with other material. In short, this is what cosmic chaos looks like. 
`,

        `
Fortunately these epic explosions and cosmological collisions are far away, at a distance of around 6,500 light-years from Earth. 

This region of the universe first achieved fame in 1995 when it was imaged by NASA's Hubble Space Telescope. A follow-up campaign was done by Hubble in 2014, and plenty of other observatories have also trained their lenses on the area that lies within the Eagle Nebula. 
`,
        `
A side-by-side comparison of the new image and Hubble's take on the cosmic phenomenon reveals how Webb's infrared instrument is able to peer through the curtains of dust and gas that shroud the scene. 

NASA and astronomers around the world will be looking to images like these and more data from Webb to glean a better understanding of the process of star formation.

For the rest of us, it's some appealing eye candy just in time for Halloween. 
`,
        `
Newly formed stars are the scene-stealers in this image from Webb’s Near-Infrared Camera (NIRCam). These are the bright red orbs that typically have diffraction spikes and lie outside one of the dusty pillars. When knots with sufficient mass form within the pillars of gas and dust, they begin to collapse under their own gravity, slowly heat up, and eventually form new stars.

What about those wavy lines that look like lava at the edges of some pillars? These are ejections from stars that are still forming within the gas and dust. Young stars periodically shoot out supersonic jets that collide with clouds of material, like these thick pillars. This sometimes also results in bow shocks, which can form wavy patterns like a boat does as it moves through water. The crimson glow comes from the energetic hydrogen molecules that result from jets and shocks. This is evident in the second and third pillars from the top – the NIRCam image is practically pulsing with their activity. These young stars are estimated to be only a few hundred thousand years old.

Although it may appear that near-infrared light has allowed Webb to “pierce through” the clouds to reveal great cosmic distances beyond the pillars, there are almost no galaxies in this view. Instead, a mix of translucent gas and dust known as the interstellar medium in the densest part of our Milky Way galaxy’s disk blocks our view to much of the of the deeper universe.
`,
        `
The James Webb Space Telescope is the world's premier space science observatory. Webb will solve mysteries in our solar system, look beyond to distant worlds around other stars, and probe the mysterious structures and origins of our universe and our place in it. Webb is an international program led by NASA with its partners, ESA (European Space Agency) and CSA (Canadian Space Agency).
`,
      ],
      category: "Science",
      tags: ["nasa", "space", "webb", "telescope"],
      author: "Eric Mack",
      assets: [
        "https://www.cnet.com/a/img/resize/3491fe331e64578fb656f18ac80a956206df65fd/hub/2022/10/19/b5925c18-5f1f-48d7-aa47-b5091a5670d6/stsci-01gf49bhzj1wx8w803281hrbcw.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.youtube.com/watch?v=1__KBHIo_xs",
        "https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-01gfnr1kzzp67ffgv8y26kr0vw.png",
        "https://media.npr.org/assets/img/2021/07/16/hubble-about-eagle-nebular-visible-infrared_wide-d4f2fe1d6bb297c3aeb68c57d3fd1034febfa8ec-s800-c85.webp",
      ],
      template_id: 2,
    });
  else res.status(400).send(new Error("Please provide an id."));
}
