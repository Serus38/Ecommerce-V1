type TagType = 'Nuevo' | 'Agotado';

interface Props {
    contentTag: TagType;
}

const getTagColor = (content: TagType) => {
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('nuevo')) return 'bg-green-500';
    if (lowerContent.includes('agotado')) return 'bg-red-500';
    return 'bg-gray-500'; // Default color for unrecognized tags
}

export const Tag = ({ contentTag }: Props) => {
  return (
    <div 
        className={`text-white w-fit px-2 ${getTagColor(contentTag)} `}>
        <p className="uppercase text-xs font-medium"> {contentTag}
        </p>
    </div>
  )
}
