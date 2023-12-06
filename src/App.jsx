import { useState } from 'react'


function App() {

  const initialFormData = {
    author: '',
    title: '',
    description: '',
    category: '',
    published: '',
    img: ''
  }

  const [formData, setFormData] = useState(initialFormData);
  const [titleList, setTitleList] = useState([]);

  function createFormData(newValue, fieldName) {
    //clono l'ogetto e uso lo spread per eliminare lo stato attuale
    const newFormData = { ...formData };

    //aggiorno la chiave e il valore
    newFormData[fieldName] = newValue

    //passi l'ogetto modificato a setFormData
    setFormData(newFormData)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setTitleList([...titleList, { ...formData }])

    //resetto form
    setFormData(initialFormData)
  }

  function removeTitle(idToRemove) {
    // const newUsersList = [...usersList]

    // newUsersList.splice(newUsersList.findIndex((user) => user.id === idToRemove), 1)

    setTitleList(titleList.filter((title, i) => i !== idToRemove));

  }

    function update(elem, idToUpdate){
      setFormData({
        author: elem.author,
        title: elem.title,
        description: elem.description
      })

      // setTitleList(titleList.filter((i)=> i == idToUpdate ? ))

      console.log(titleList)
    }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-2/4 h-2/4 bg-gray-200 rounded flex flex-col justify-evenly' >
          <h1 className='text-center font-semibold mb-3'>Compila il form</h1>
          <form className='flex justify-around flex-col w-2/4 h-2/6 mx-auto' onSubmit={handleSubmit}>
            <input className='border-solid border-2 border-black rounded mb-1' type="text" name="author" placeholder="inserisci l'autore" value={formData.author} onChange={(e) => createFormData(e.target.value, 'author')} />
            <input className='border-solid border-2 border-black rounded mb-1' type="text" name="title" placeholder='inserisci il titolo' value={formData.title} onChange={(e) => createFormData(e.target.value, 'title')} />
            <input className='border-solid border-2 border-black rounded mb-1' type="text" name="img" placeholder="inserisci URL img" value={formData.img} onChange={(e) => createFormData(e.target.value, 'img')} />
            <input className='border-solid border-2 border-black rounded mb-1' type="text" name="description" placeholder='inserisci la descrizione' value={formData.description} onChange={(e) => createFormData(e.target.value, 'description')} />
            <select name="category" className='mb-2' value={formData.category} onChange={(e) => createFormData(e.target.value, 'category')}>
              <option disabled value="">Seleziona categoria</option>
              <option value="category 1">Prima categoria</option>
              <option value="category 2">Seconda categoria</option>
              <option value="category 3">Terza categoria</option>
            </select>
            <div className='flex justify-start items-center mb-2'>
              <input name='published' cheked={formData.published} type="checkbox" onChange={(e) => createFormData(e.target.checked, 'published')} /><span>Published</span>
            </div>
            <button className='bg-blue-500 p-2 rounded text-white mb-2'>Aggiungi</button>
          </form>
          <div className='w-full'>
            <ul className='w-full'>
              {titleList.map((elem, i) => {
                return (
                  <li key={i} className='flex justify-between items-center border-l-4 border-green-600 w-2/4 mx-auto my-3 pl-2'>{elem.author} - {elem.title}, {elem.description}, {elem.category}, {elem.published}
                    <img src={elem.img} className='w-14 h-14' alt="img" />
                    <div className='text-red-500 cursor-pointer flex'>
                      {/* icona update */}
                      <svg onClick={() => update(elem, i)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      {/* icona delete */}
                      <svg onClick={() => removeTitle(i)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
