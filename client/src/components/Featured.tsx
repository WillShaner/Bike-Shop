import React from 'react';
type IClient = {
  id: string;
  source: string;
};

type Props = {
  clients: Array<IClient>;
};

export default function Featured({ clients }: Props) {
  return (
    <div>
      {clients.map((x) => {
        return <img src={x.source} key={x.id} />;
      })}
    </div>
  );
}
