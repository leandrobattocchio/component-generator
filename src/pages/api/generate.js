import { API_URL, OPENAI_API_KEY } from "@/constants/apiConstants";

export default async function handler (req, res) {
  const { prompt, language, framework } = req.query;

  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
  if (!language) return res.status(400).json({ error: "Missing language" });
  if (!framework) return res.status(400).json({ error: "Missing framework" });


  console.log({ prompt, language, framework })

  const messages = [
    {
      role: "system",
      content:
        "Asume que eres developer y estás generando código para ser usado en producción. Sólo genera el código sin explicaciones. Por defecto, usa HTML y CSS si no se te indica lo contrario.",
    },
    { role: "user", content: "Crea un botón azul." },
    {
      role: "assistant",
      content:
        '<button style="background: blue; color: white;">Button</button>\ninfo:Botón con sólo HTML.',
    },
    {
      role: "user",
      content:
        'Crea un botón que diga "Hola", que sea redondeado con fondo rojo. Con HTML, CSS y JS.',
    },
    {
      role: "assistant",
      content:
        '<button style="background: red; color: white; border-radius: 9999px;">Hola</button>\ninfo:Botón con HTML y CSS en línea con estilos.',
    },
    { role: "user", content: "Crea un botón con Tailwind. Con HTML, CSS y JS" },
    {
      role: "assistant",
      content:
        '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>\ninfo: Botón usando clases de Tailwind de color azul',
    },
    {
      role: "user",
      content:
        'Crea un botón con Tailwind que diga "Hola". Con HTML, CSS y JS.',
    },
    {
      role: "assistant",
      content:
        '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hola</button>\ninfo:Botón usando clases de Tailwind que dice Hola y es de color azul',
    },
    {
      role: "user",
      content: "Crea un botón que al hacer click aparezca un alert. Con React.",
    },
    {
      role: "assistant",
      content: `export default function Button () {
                  return <button onClick={() => alert("Hola")}>Button</button>
                }\ninfo:Botón de React que al hacer click muestra un alert`,
    },
  ];

  let promptToSend = prompt

  if (framework !== 'vanilla') {
    promptToSend = `${prompt}. Para ${framework}.`
  }

  if (language !== 'javascript') {
    promptToSend = `${prompt}. Con ${language}.`
  }


  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [...messages, { role: "user", content: promptToSend }],
      stream: false,
      temperature: 0.0,
      stop: ["\ninfo:"],
    }),
  });

  if (!response.ok) {
    console.error(response.statusText)
    return res.status(500).json({ error: "Something went wrong" });
  }

  const { choices } = await response.json()
  const content = choices[0]?.message?.content
  return res.status(200).json({ content })
}
