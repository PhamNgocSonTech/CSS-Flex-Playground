// PHẦN 1: Align Items
function setAlignItems(value, button) {
  const container = document.getElementById("cardContainer1");
  container.style.alignItems = value;
  document.getElementById(
    "currentProperty1"
  ).textContent = `align-items: ${value};`;

  // Update active button
  const section = document.querySelectorAll(".section")[0];
  const buttons = section.querySelectorAll(".controls .btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}
// PHẦN 2: Flex Direction Toggle
function toggleFlexDirection() {
  const card = document.getElementById("cardWith");
  const isChecked = document.getElementById("flexDirectionToggle").checked;

  if (isChecked) {
    card.style.display = "flex";
    card.style.flexDirection = "column";
  } else {
    card.style.display = "block";
  }
}

function toggleMarginAuto() {
  const btn = document.getElementById("btnWith");
  const isChecked = document.getElementById("marginAutoToggle").checked;

  if (isChecked) {
    btn.style.marginTop = "auto";
  } else {
    btn.style.marginTop = "0";
  }
}

// PHẦN 3: Flex Grow
const flexGrowValues = [1, 1, 1];

function setFlexGrow(cardNum, value, button) {
  flexGrowValues[cardNum - 1] = value;
  const card = document.getElementById(`growCard${cardNum}`);
  card.style.flexGrow = value;
  card.querySelector(".card-description").textContent = `flex-grow: ${value}`;

  // Update display
  document.getElementById(
    "flexGrowDisplay"
  ).textContent = `Card 1: flex-grow: ${flexGrowValues[0]} | Card 2: flex-grow: ${flexGrowValues[1]} | Card 3: flex-grow: ${flexGrowValues[2]}`;

  // Update active button
  const section = document.querySelectorAll(".section")[2];
  const groups = section.querySelectorAll(".control-group");
  const buttons = groups[cardNum - 1].querySelectorAll(".btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// PHẦN 4: Align Self
function setAlignSelf(value, button) {
  const card = document.getElementById("selfAlignCard");
  card.style.alignSelf = value;
  document.getElementById(
    "alignSelfDisplay"
  ).textContent = `Card giữa: align-self: ${value};`;

  // Update active button
  const section = document.querySelectorAll(".section")[3];
  const buttons = section.querySelectorAll(".controls .btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// PHẦN 5: Flex Wrap
function toggleWrap() {
  const container = document.getElementById("wrapContainer");
  const isChecked = document.getElementById("wrapToggle").checked;

  if (isChecked) {
    container.style.flexWrap = "wrap";
  } else {
    container.style.flexWrap = "nowrap";
  }
  updateWrapDisplay();
}

function toggleMinWidth() {
  const cards = document.querySelectorAll(".wrapCard");
  const isChecked = document.getElementById("minWidthToggle").checked;

  cards.forEach((card) => {
    card.style.minWidth = isChecked ? "250px" : "0";
  });
  updateWrapDisplay();
}

function updateWrapDisplay() {
  const wrap = document.getElementById("wrapToggle").checked
    ? "wrap"
    : "nowrap";
  const minWidth = document.getElementById("minWidthToggle").checked
    ? "250px"
    : "0";
  document.getElementById(
    "wrapDisplay"
  ).textContent = `flex-wrap: ${wrap}; min-width: ${minWidth};`;
}
