function cardSearch() {
<>
<div id="cercaFiltro">
<form>
  <label for="cerca">Cerca</label><br>
    <input type="text" id="campoDiRicerca" name="ricerca" placeholder ="Cerca un titolo, descrizione o contenuto"></input>
  <label for="data><Data da:</label>
    <input type="text" id="data" placeholder ="gg/mm/aaaa">
  <label for="categorie">Categoria</label>
    <select id="category">
      <option value="Tutti">Tutti</option>
      <option value="Da Leggere">Da Leggere</option>
      <option value="Letti">Letti</option>
     </select> 
    <button id="invia" type="submit">Invia filtri</button>
    <button id="reset"  type="reset">Reset filtri</button>
</form>
</div>
</>
}
