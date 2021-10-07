export type RenderItemVideoProps = {
  id: string;
  title: string;
  uri: string;
  pathLocal: string | null;
  onPressOpen: (patch: string) => void;
};
