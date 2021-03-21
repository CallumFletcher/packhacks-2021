export default function scoreToTime(score) {
  const seconds = Math.floor(score / 1000);
  return Math.floor(seconds / 360) / 10;
}
