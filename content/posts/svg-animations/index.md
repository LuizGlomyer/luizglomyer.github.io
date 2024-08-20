---
title: 'SVG animations'
date: 2024-05-26
layoutBackgroundBlur: false

categories:
- Front-end
tags:
- Graphical interfaces
- Webdev

---

## SVG animations

When I first entered the [Blowfish](https://blowfish.page/) theme landing page, I was amazed by one detail of the site: the background. Unfortunately, this background doesn't come with the default theme, but this piqued my curiosity and I went looking to find out how such a fluid animation could be a background. It was when I found the personal website of the creator of Blowfish and took a look at his repository that I discovered the secret to the magic: an animated .svg file.

<iframe 
  src="https://blowfish.page/" 
  width="500px" 
  height="480px"
>
</iframe>

I had no idea that an SVG could contain animations. This opened my mind: most of the "native" animations we see on websites and in components use this format under the hood. This way, you can obtain optimal quality because these animations do not use raster images, but are rendered directly in the browser using vector mathematical calculations.

## Animations and graphical interfaces

One thing I've noticed, both as a professional and as a user, is that web pages with animation manage to retain more users than those that are completely static. Entering a landing page and coming across an eye-popping animation can be the deciding factor in whether or not to use a system. The power of a well-designed graphic interface should not be underestimated, and animations, not just those based on SVG, are a huge, huge bonus in attracting interest. Compare, for example, the homepages of Facebook, one of the most visited sites in the world, and Tailwind CSS.

![Facebook homepage screenshot](facebook.png "Facebook homepage")
![Tailwind CSS homepage screenshot](tailwind.png "Tailwind CSS homepage")

Facebook, despite being one of the largest social networks today, prefers to keep a more minimalist look with neutral colors. The Tailwind CSS homepage, on the other hand, stands out for its dynamism: code for a component is shown on screen and rendered on the side. Attributes are modified and the visualization of the component is changed in real time, in smooth transitions. This not only captivates, but also shows the technical capabilities of the framework in a practical way, making a strong impression.

In my opinion, most of the graphic interfaces we see, or even develop, lack this *eye candy* that is animations. A startup that uses the Facebook approach will rarely be successful, because it's a very weak visual identity. 


## 🔴🟢🔵 Venn RGB

{{< posts/svg-animations/venn-rgb >}}

So I decided to play around with making svg animations. I thought of something simple and visually pleasing, a Venn diagram with RGB colors. As the combination of three different colors can generate interesting results, I used `mix-blend-mode` to see the different possible color mixtures. An SVG basically works just like html, a file in which you define tags for each of the elements present in the image. The big difference is the existence of specific tags which, instead of defining elements on the screen, define rules to be applied to these elements. I've separated the markup from the styling to improve readability, but in practice both are in the same file.

```html
<svg class="bg-rgb" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
   <defs>
    <g id="R1">
      <ellipse rx="100" ry="100">
        <animateTransform attributeName="transform" type="rotate" dur="1s" from="0" to="360" repeatCount="indefinite" />
        <animate attributeName="cx" dur="20s" values="0; 150; 0" repeatCount="indefinite" />
      </ellipse>
    </g>
  </defs>

  <circle cx="200" cy="200" r="1.5" class="reference-point" />
  <g>
    <use href="#R1" transform="rotate(110 200 200) translate(250 250)" class="red ellipse" />
    <use href="#R1" transform="rotate(230 200 200) translate(250 250)" class="green ellipse" />
    <use href="#R1" transform="rotate(350 200 200) translate(250 250)" class="blue ellipse" />
  </g>
</svg>
```

The `<defs>` tag acts as a template, defining the basic structure of elements that can be reused in the animation using the `<use>` tag. In this case, the tag is used to define a circle of radius 100 that has two animations: one that moves back and forth on the x-axis and another that applies a rotation to this movement, resulting in a spiral movement. Each `<use>` creates a different circle and applies an override to the attributes that define the initial state of each one. CSS classes are also defined for each of these elements to apply specific stylizations. Finally, a circle is drawn right in the middle of the SVG so that we can see the center of the animation.

```css
    .ellipse {
      mix-blend-mode: lighten;
    }

    g {
      isolation: isolate;
    }

    .red {
      fill: rgb(255, 0, 0);
    }

    .green {
      fill: rgb(0, 255, 0);
    }

    .blue {
      fill: rgb(0, 0, 255);
    }

    .reference-point {
      fill: black;
    }

    .bg-rgb {
      overflow: visible;
      isolation: isolate;
      background-color: #fff;
      background-image: linear-gradient(45deg,
          rgba(0, 0, 0, 0.1) 25%,
          transparent 25%,
          transparent 75%,
          rgba(0, 0, 0, 0.1) 75%,
          rgba(0, 0, 0, 0.1)),
        linear-gradient(45deg,
          rgba(0, 0, 0, 0.1) 25%,
          transparent 25%,
          transparent 75%,
          rgba(0, 0, 0, 0.1) 75%,
          rgba(0, 0, 0, 0.1));
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
    }
```

The CSS is defined in a `<style>` tag that resides just above the `<defs>` tag. First, a checkered background is defined using gradients. The colors are mixed using **blend-modes**; the *lighten* attribute was chosen to make the sum of each of the colors come together at each intersection of the circles. In practice, the three intersecting circles mean that we are performing the following sum, generating the color white:

{{< katex >}}
\\(rgb(255, 0, 0) + rgb(0, 255, 0) + rgb(0, 0, 255) = rgb(255, 255, 255)\\)

By default, the circles also blend into the background, changing their default colors. To avoid this behavior, each `<use>` is enclosed in a `<g>` group tag that has the `isolation: isolate` attribute in its CSS, restricting the scope of the CSS, and therefore of the blend.


---

## 🔵🟣🟡⚫ Venn CMYK

{{< posts/svg-animations/venn-cmyk >}}

In a very similar way, and with a few changes to the parameters, it is possible to adapt the previous example to demonstrate the CMYK color system, based on the principle of excluding colors via **blend-mode**.

An interesting detail in both animations is the definition of an `overflow: visible` for the SVG background, causing the elements of the animation to leak out of the element, which has a fixed size of 400x400 px.

## 👁️ Hyperzone background

The background for this post comes from the game Kirby's Dream Land 3. I've always wanted to implement this background, so I took the opportunity and challenged myself to recreate it purely with .svg animations (no Javascript!). I must say that it was a disastrous experience in which I learned a good lesson: don't try to reinvent the wheel. Certain things shouldn't be done from scratch.

The .svg has a resolution of 500x500. To create an infinite pattern, I needed to make auxiliary ellipses to give the illusion of leaving one side of the screen and entering the other. First, I had a lot of manual work to make each of the ellipses move, needing to calculate each start and end coordinate of the animation. In addition, I had numerous clipping problems, sometimes the ellipses didn't line up perfectly and the transition wasn't smooth, I needed to use a lot of trial and error to get it right. Never do something like this from scratch, seriously.

The final result can be seen in full [here](/hyperzone). The original:

<iframe width="560" height="315" src="https://www.youtube.com/embed/CngedZCAqqg?si=ThQiS4TaufKiUGAk&amp;start=620" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusion

In my opinion, programming SVGs manually isn't worth it. It's a time-consuming process and not easy to test. A pure SVG (without the presence of javascript) is usually very tied to the elements declared in its markup, creating an artifact with static elements. Generating elements dynamically, for example, a circle every 100px of viewport, doesn't seem possible, as there is a fixed coordinate system. One way around this is to use patterns, but this depends on the goal you want to achieve with SVG.

I'm sure there must be more convenient and agile ways of creating animations, such as design software. While researching, I discovered a site called [loading.io](https://loading.io/) that allows you to make animated icons and [patterns](https://loading.io/pattern/). Very useful for bringing our pages to life.
