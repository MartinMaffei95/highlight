import HighlightedWord from './components/HighlightedWord/HighlightedWord';

function App() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <HighlightedWord
        containerClassName="text-neutral-900"
        text="Hola soy martin y este es mi titulo"
      />
      <HighlightedWord
        variation="base"
        containerClassName="text-neutral-900"
        text="TITULO numero 1"
      />
      <HighlightedWord
        variation="underlined"
        containerClassName="text-neutral-900"
        text="Probando styles"
      />
    </div>
  );
}

export default App;
