var firebaseConfig = {
    apiKey: "AIzaSyAFL1H0z3fDHrPwYD7o27w6vpda22MWS8Q",
    authDomain: "materias-web.firebaseapp.com",
    databaseURL: "https://materias-web.firebaseio.com",
    projectId: "materias-web",
    storageBucket: "materias-web.appspot.com",
    messagingSenderId: "32173026723",
    appId: "1:32173026723:web:063f1f51d23360931b3e16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  let Sociologia = []

  function createDelButton(doc){
    const newButton = document.createElement("button")
    newButton.appendChild(document.createTextNode("Excluir"))
    newButton.setAttribute("onclick", `deleteTask("${doc.id}")`)
    return newButton
  }


  function renderTasks(){
    const conteudo = document.getElementById("content")
    conteudo.innerHTML=""
    conteudo.style.borderStyle="solid"
    for (doc of Sociologia){
        const title = document.createElement("h1")
        title.appendChild(document.createTextNode(doc.title))
        title.style.borderTopStyle="solid";
        title.style.marginTop="-2px"
        title.style.paddingTop="30px"
        conteudo.appendChild(title)
        const img = document.createElement("img")
        img.src="https://www.moskvaer.com/wp-content/uploads/2016/07/capitalism.jpg";
        conteudo.appendChild(img)
        const desc = document.createElement("p")
        desc.appendChild(document.createTextNode(doc.desc))
        desc.style.marginBottom="10px"
        conteudo.appendChild(desc)
        const pdf = document.createElement("img")
        const link = document.createElement("a")
        link.setAttribute("href", "https://felipeschmitt.github.io/workwords/social_science/capitalismo%20e%20precarizacao.pdf")
        pdf.src="pdf.webp";
        pdf.style.width="30%";
        pdf.style.cursor="pointer"
        pdf.style.marginLeft="35%"
        conteudo.appendChild(link)
        link.appendChild(pdf)

      }
  }

async function readTasks() {
    Sociologia = []
    const logTasks = await db.collection("Sociologia").get()
    for (doc of logTasks.docs) {
    Sociologia.push({
        id: doc.id,
        title: doc.data().title,
        desc: doc.data().desc,

        })
    }
    renderTasks()
}


async function addTask(){
  const newDoc = document.getElementById("title").value
  const date = new Date().toISOString()
  await db.collection("Sociologia").add({
    title: newDoc,
    date: date,
  })
  readTasks()
}
async function deleteTask(id) {
    await db.collection("Sociologia").doc(id).delete()
    readTasks()
  }
readTasks()

  