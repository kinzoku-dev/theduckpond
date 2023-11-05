import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import * as elements from "typed-html"
const app = new Elysia();

app.use(html())
app.get('/', ({ html }) => html(
  <BaseHtml>
    <body class="bg-gray-800">
      <h1 class="text-white text-5xl text-center my-5">hello!</h1>
      <h1 class="text-white text-8xl text-center my-3">Welcome to The Duck Pond!</h1>
      <div class="h-[50rem] w-[35rem] bg-gray-900 border-8 border-black mx-auto my-7 py-7 px-5">
        <ul class="flex flex-col items-center">
          <li>
            <a href="https://discord.gg/TnJGt3GSNU" class="text-white text-2xl flex-row flex"><img src="https://imgs.search.brave.com/Z-f0KFNOa7AvywBHFae1XOPGdJrOFC_YV6s-qXtPr0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9EaXNjb3Jk/LWxvZ28taWNvbi1j/bHlkZS1ibHVycGxl/LXBuZy5wbmc" alt="Discord logo" class="w-9 h-7 mx-2"/>Discord</a>
          </li>
        </ul>
      </div>
    </body>
  </BaseHtml>
))

app.listen(3000)
console.log("Elysia server listening on port 3000")

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">
</head>

${children}
`;
