import Image from "next/image";
import { cn } from "@/lib/utils";

export function BentoItem({
  image,
  className,
  size = "medium",
  uploadedBy = "IanDev",
}) {
  // Map size to grid span classes
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    large: "col-span-2 row-span-2",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-background transition-all",
        sizeClasses[size],
        className
      )}
    >
      <div className="relative w-full h-full aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt="Meme image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Subtle gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Attribution at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                {uploadedBy.charAt(0)}
              </div>
              <a href="https://iandev.xyz" target="_blank">
                <span className="text-white text-sm">made by {uploadedBy}</span>
              </a>
            </div>

            {/* Download button */}
            <a
              href={image || "/placeholder.svg"}
              download
              className="bg-white/90 hover:bg-white text-black text-xs rounded-full px-3 py-1 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BentoGrid({ items, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-3 p-4 auto-rows-auto bg-gray-100 dark:bg-gray-900",
        className
      )}
    >
      {/* First row with one large item and two small items */}
      <BentoItem
        image={items[0]?.image || "/placeholder.svg"}
        size="large"
        className="row-span-2"
      />

      {/* Middle section */}
      <BentoItem image={items[1]?.image || "/placeholder.svg"} size="small" />
      <BentoItem image={items[2]?.image || "/placeholder.svg"} size="small" />
      <BentoItem
        image={items[3]?.image || "/placeholder.svg"}
        size="large"
        className="row-span-2"
      />
      <BentoItem image={items[4]?.image || "/placeholder.svg"} size="small" />

      {/* Bottom section */}
      {items.slice(5).map((item, index) => (
        <BentoItem key={index + 5} image={item.image} size="small" />
      ))}

      <BentoItem
        image={items[15]?.image || "/placeholder.svg"}
        size="large"
        className="row-span-2"
      />

      {/* Middle section */}
      <BentoItem image={items[18]?.image || "/placeholder.svg"} size="small" />
      <BentoItem image={items[19]?.image || "/placeholder.svg"} size="small" />
      <BentoItem
        image={items[20]?.image || "/placeholder.svg"}
        size="large"
        className="row-span-2"
      />
      <BentoItem image={items[21]?.image || "/placeholder.svg"} size="small" />
      <BentoItem image={items[22]?.image || "/placeholder.svg"} size="small" />
    </div>
  );
}
