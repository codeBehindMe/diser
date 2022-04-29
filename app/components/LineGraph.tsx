import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid } from 'recharts';
const data = [
  {uv: 54}, 
  {uv: 65}, 
  {uv: 80},
  {uv: 72},
  {uv: 70},
  {uv: 72},
  {uv: 73},
  {uv: 73},
  {uv: 72},
  {uv: 71},
  {uv: 70},
  {uv: 68},
  {uv: 74},
  {uv: 74},
  {uv: 74},
  {uv: 73},
  {uv: 72},
  {uv: 71},
  {uv: 70},
  {uv: 72},
  {uv: 71},
  {uv: 64},
  {uv: 58},
  {uv: 60},
  {uv: 52},
  {uv: 56},
];

const data2 = [
  {uv: 66}, 
  {uv: 68}, 
  {uv: 70},
  {uv: 72},
  {uv: 70},
  {uv: 72},
  {uv: 73},
  {uv: 73},
  {uv: 72},
  {uv: 71},
  {uv: 70},
  {uv: 68},
  {uv: 74},
  {uv: 74},
  {uv: 74},
  {uv: 73},
  {uv: 72},
  {uv: 71},
  {uv: 70},
  {uv: 72},
  {uv: 71},
  {uv: 64},
  {uv: 52},
  {uv: 44},
  {uv: 35},
  {uv: 36},
];

interface Props {
  version?: string
}

export const LineGraph: React.FC<Props> = ({ version }) => {
  let useData = data;

  if (version == 'data2') {
    useData = data2;
  }

  return (
    <LineChart width={400} height={400} data={useData}>
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} />
      <XAxis label={"Wavelength [nm]"} tick={false} />
      <YAxis domain={[35, 80]}>
        <Label angle={-90} value='Reflectance [%]' position='insideLeft' style={{textAnchor: 'middle'}} />
      </YAxis>
    </LineChart>
  )
};
