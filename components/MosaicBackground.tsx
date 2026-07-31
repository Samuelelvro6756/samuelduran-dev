export default function MosaicBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-[0.05]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%23569cd6' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M20 30 L10 40 L20 50 M35 30 L45 40 L35 50'/%3E%3Ctext x='70' y='45' font-family='monospace' font-size='24' fill='%23569cd6' stroke='none'%3E%7B%7D%3C/text%3E%3Cpath d='M130 25 L130 50 M120 30 L140 30'/%3E%3Ctext x='170' y='45' font-family='monospace' font-size='20' fill='%23569cd6' stroke='none'%3E;%3C/text%3E%3Cpath d='M15 120 Q25 110 35 120 Q25 130 15 120'/%3E%3Ctext x='65' y='135' font-family='monospace' font-size='22' fill='%23569cd6' stroke='none'%3E%23%3C/text%3E%3Cpath d='M110 115 L125 125 L110 135'/%3E%3Ccircle cx='170' cy='125' r='3'/%3E%3Cpath d='M170 118 L170 132 M195 125 L210 125'/%3E%3Ctext x='20' y='210' font-family='monospace' font-size='20' fill='%23569cd6' stroke='none'%3E()%3C/text%3E%3Cpath d='M90 195 L90 220 M80 200 L100 200'/%3E%3Ctext x='140' y='215' font-family='monospace' font-size='18' fill='%23569cd6' stroke='none'%3E=%3E%3C/text%3E%3Ccircle cx='210' cy='200' r='3'/%3E%3Cpath d='M210 193 Q220 200 210 207'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
      }}
    />
  );
}