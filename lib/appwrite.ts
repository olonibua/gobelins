import { Client, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const storage = new Storage(client);

// Helper function to get video URL
export const getVideoUrl = (fileId: string) => {
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;
    return storage.getFileView(bucketId, fileId);
};

// Video file IDs - replace these with your actual file IDs from Appwrite
export const VIDEO_IDS = {
    HERO_VIDEO: '67af441c002a4e75a807',
    LOGO_ZOOM: '67af448d00133930a1e0',
    DARK_LOGO_PEEK: '67af43f6003994f72df1',
    GOBELINS_BLUE: '67af4c08001079dc7f70'
}; 