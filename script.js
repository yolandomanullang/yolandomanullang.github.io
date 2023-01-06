fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    // Ambil data yang ingin ditampilkan
    const name = data.name
    const weight = data.weight
    const abilities = data.abilities.map(ability => ability.ability.name).join(', ')
    
    // Buat elemen HTML yang akan menampilkan data
    const pokemonContainer = document.createElement('div')
    const pokemonName = document.createElement('h1')
    const pokemonWeight = document.createElement('p')
    const pokemonAbilities = document.createElement('p')
    
    // Masukkan data ke dalam elemen HTML
    pokemonName.textContent = name
    pokemonWeight.textContent = `Berat: ${weight}`
    pokemonAbilities.textContent = `Kemampuan: ${abilities}`
    
    // Masukkan elemen HTML ke dalam container
    pokemonContainer.appendChild(pokemonName)
    pokemonContainer.appendChild(pokemonWeight)
    pokemonContainer.appendChild(pokemonAbilities)
    
    // Tambahkan container ke halaman HTML
    document.body.appendChild(pokemonContainer)
  })
  .catch(error => console.error(error))
