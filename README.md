# L² Academy Website

Responsive one-page website for L² Academy, built with React, Vite, Tailwind CSS, Lucide and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Academy details

Edit `src/data/academyData.js` to add the academy’s real phone number, email address, Instagram URL and Facebook URL. Keep phone numbers in international format for WhatsApp. Until the email is configured, the contact form validates details but explains that delivery is not set up. Once an email is configured, it opens a prefilled email draft and asks the visitor to send it.

## Photos

- `public/images/student-learning.jpg`: Monstera Production via Pexels, [photo 6237992](https://www.pexels.com/photo/positive-asian-woman-with-notebook-studying-in-classroom-6237992/).
- `public/images/learning-students.jpg`: Yustinus Tjiuwanda via Unsplash, [students reading textbooks](https://unsplash.com/photos/students-reading-textbooks-in-classroom-BCBGahg0MH0).

The page uses no real testimonials, teacher credentials, achievement claims or student statistics. The testimonial area is explicitly marked as a placeholder.

`public/robots.txt` allows search engines to crawl the site. Add a sitemap after the deployment hostname is confirmed so it can contain the correct canonical URL.
