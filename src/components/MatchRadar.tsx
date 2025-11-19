"use client";
import React from 'react';
import { University } from '@/data';
import { QuizAnswers } from '@/context/QuizContext';

interface MatchRadarProps {
  uni: University | null;
  answers: QuizAnswers;
}

// Simple mapping of interest categories to axes (max 1 if present)
const AXES = [
  'IT/Computer Science',
  'Engineering',
  'Business',
  'Design/Arts',
  'Medicine',
  'Data Science / AI'
];

function scoreAxis(name: string, answers: QuizAnswers, uni: University | null) {
  const hasInterest = answers.interests.includes(name as any) ? 1 : 0;
  if (!uni) return { interest: hasInterest, uni: 0 };
  // Approximate category relevance using available numeric scores
  let uniScore = 0;
  switch (name) {
    case 'IT/Computer Science':
    case 'Data Science / AI':
      uniScore = normalize(uni.score_it_cs);
      break;
    case 'Engineering':
      uniScore = normalize(uni.score_engineering);
      break;
    case 'Business':
      uniScore = normalize(uni.score_business);
      break;
    case 'Design/Arts':
      uniScore = normalize(uni.score_design_arts);
      break;
    case 'Medicine':
      uniScore = normalize(uni.score_medicine);
      break;
    default:
      uniScore = 0;
  }
  return { interest: hasInterest, uni: uniScore };
}

function normalize(raw: number) {
  // Assume scores roughly 0-100; cap & scale to 0..1
  return Math.max(0, Math.min(1, raw / 100));
}

export const MatchRadar: React.FC<MatchRadarProps> = ({ uni, answers }) => {
  const r = 70; // radius
  const center = { x: 80, y: 80 };
  const pointsInterest: string[] = [];
  const pointsUni: string[] = [];
  AXES.forEach((axis, i) => {
    const a = (Math.PI * 2 * i) / AXES.length - Math.PI / 2;
    const { interest, uni: uScore } = scoreAxis(axis, answers, uni);
    const ri = 10 + interest * r; // interest polygon radius
    const ru = 10 + uScore * r * 0.85; // uni polygon radius slightly smaller
    const xi = center.x + ri * Math.cos(a);
    const yi = center.y + ri * Math.sin(a);
    const xu = center.x + ru * Math.cos(a);
    const yu = center.y + ru * Math.sin(a);
    pointsInterest.push(`${xi},${yi}`);
    pointsUni.push(`${xu},${yu}`);
  });
  return (
    <div className="glass p-4 rounded-xl">
      <h3 className="font-semibold mb-2 text-sm">Interest vs Match Profile</h3>
      <svg viewBox="0 0 160 160" width={200} height={200}>
        {/* radial grid */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <circle key={f} cx={center.x} cy={center.y} r={r * f} stroke="#ffffff22" fill="none" />
        ))}
        {/* axes */}
        {AXES.map((axis, i) => {
          const a = (Math.PI * 2 * i) / AXES.length - Math.PI / 2;
          const x = center.x + r * Math.cos(a);
          const y = center.y + r * Math.sin(a);
          return (
            <g key={axis}>
              <line x1={center.x} y1={center.y} x2={x} y2={y} stroke="#ffffff18" />
              <text x={x} y={y} fill="#ffffff88" fontSize={8} textAnchor="middle" dy={y < center.y ? -4 : 10}>{axis.split(' ')[0]}</text>
            </g>
          );
        })}
        <polygon points={pointsInterest.join(' ')} fill="rgba(57,198,255,0.35)" stroke="#39C6FF" strokeWidth={1.5} />
        <polygon points={pointsUni.join(' ')} fill="rgba(255,212,121,0.35)" stroke="#FFD479" strokeWidth={1.5} />
      </svg>
      <div className="mt-2 text-xs text-blue-200">Blue: Your interests · Gold: {uni ? uni.university_name_en.split(' ')[0] : 'Match'} focus</div>
    </div>
  );
};

export default MatchRadar;
