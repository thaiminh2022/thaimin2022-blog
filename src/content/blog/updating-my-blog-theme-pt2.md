---
title: Updating my blog theme Pt.2
description: The return of scroll to top
date: 2024-07-26
author: Thaiminh2022
tags: ["thaiminh2022", "blog", "theme", "scroll-to-top"]
heroImage:
  {
    src: "https://repository-images.githubusercontent.com/249080188/f7dd4f80-3628-11eb-8f57-368a5b43dc5a",
    alt: Rose Pine,
  }
---

## Some notes before reading

- Originally, I wanted to remove the scroll to top button because the old design was very annoying, it was jumpy and was distracting. So i removed them.

- I wanted to change the table of content to fixed on the right side so it will be better, but im to lazy for that so we are adding scroll to top back !!!.

## It's not that hard

### The code

- If you scroll for about 20px, the bar will show up, clicking it will take you to the top.
- Here's all the code for it so the blog post will be a bit longer:

```typescript
let scrollBtn = document.getElementById("scroll-to-top");

window.onscroll = () => {
  if (scrollBtn == null) {
    return;
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
};

scrollBtn?.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
```

### www3school

- Or you could just go to [this website](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) and copy their code.

- Here's another [example](https://www.youtube.com/watch?v=dQw4w9WgXcQ) (recommended version)
