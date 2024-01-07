import "./reference.css";

function Bulking() {
  return (
    <div class="content page">
      <h1>Fill out general information about yourself!</h1>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="John Smith"
        ></input>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Age
        </label>
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="0-99"
        ></input>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput3" class="form-label">
          Sex
        </label>
        <select class="form-select" aria-label="Default select example">
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Mental Asylum Escapee</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput4" class="form-label">
          Weight
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput4"
          placeholder="lbs"
        ></input>
      </div>
      <label for="formGroupExampleInput5" class="form-label">
        Height
      </label>
      <input
        type="number"
        class="form-control"
        id="formGroupExampleInput5"
        placeholder="height in feet.inches"
      ></input>
      <div class="mb-3">
        <label for="formGroupExampleInput3" class="form-label">
          How many times do you workout?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option value="1">1 a week</option>
          <option value="2">2 a week</option>
          <option value="3">3 a week</option>
          <option value="4">4 a week</option>
          <option value="5">5 a week</option>
          <option value="6">6 a week</option>
          <option value="7">7 a week</option>
          <option value="8">8+ a week</option>
        </select>
      </div>
    </div>
  );
}

export default Bulking;
