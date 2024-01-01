// Components
import Button from '@components/atoms/button';
import Input from '@components/atoms/input';

function LeadSection() {
  return (
    <div className="mt-auto">
      <Input />
      <div className="flex items-center gap-sm">
        <Button label="Buy Now" />
        <Button label="Add to Cart" />
      </div>
    </div>
  );
}

export default LeadSection;
