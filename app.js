const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  //time-display
  const timeDisplay = document.querySelector('.time-display')
  //get the length of the outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);
  //

}
app();