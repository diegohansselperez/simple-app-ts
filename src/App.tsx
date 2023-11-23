import './App.css';

interface Props {
  title: string;
}

function App({ title }: Props) {
  return (
    <>
      <div>
        <p>{title}</p>
      </div>
    </>
  );
}

export default App;
