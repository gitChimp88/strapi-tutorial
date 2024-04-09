import { Card } from 'antd';
import Image from 'next/image';

export default function RecipeCard({ title, bordered, content }) {
  return (
    <div style={{ cursor: 'pointer', width: '400px' }}>
      <Card
        title={title}
        bordered={bordered}
        cover={
          <Image
            alt="example"
            unoptimized
            width={400}
            height={200}
            src={'https://placehold.co/400x200'}
          />
        }
      >
        {content.length > 200 ? content.slice(0, 200) + '...' : content}
      </Card>
    </div>
  );
}
