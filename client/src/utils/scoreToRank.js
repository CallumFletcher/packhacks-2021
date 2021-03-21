import scoreToTime from "./scoreToTime";

export default function scoreToRank(score) {
  const time = scoreToTime(score);
  if (time < 3) return "Beginner";
  else if (time < 6) return "Intermediate";
  else if (time < 10) return "Proficient";
  else if (time < 20) return "Advanced";
  else if (time < 40) return "Expert";
  else if (time < 60) return "A+ Student";
  else if (time < 80) return "Master";
  else if (time < 120) return "Grandmaster";
  else if (time < 160) return "Study Machine";
  else return "Godlike";
}
