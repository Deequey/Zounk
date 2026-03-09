// Prosty magazyn w pamięci – po restarcie serwera pokoje znikną.
// Na Vercelu (serverless) bitwy nie działają – każda instancja ma własną pamięć.
// Żeby bitwy działały online, trzeba zapisywać pokoje w DB (np. Vercel KV, Upstash Redis).

export type RoomUser = { id: string; name: string; token: string };
export type Room = {
  user1?: RoomUser;
  user2?: RoomUser;
};

const rooms = new Map<string, Room>();

export function createRoom(firstUser?: RoomUser): string {
  const id = crypto.randomUUID().slice(0, 8);
  const room: Room = firstUser ? { user1: firstUser } : {};
  rooms.set(id, room);
  return id;
}

export function getRoom(id: string): Room | undefined {
  return rooms.get(id);
}

export function getRoomPublic(
  id: string,
  currentUserId?: string
): {
  user1?: { name: string; id: string };
  user2?: { name: string; id: string };
  ready: boolean;
  youInRoom: boolean;
} | undefined {
  const room = rooms.get(id);
  if (!room) return undefined;
  const ready = !!(room.user1 && room.user2);
  const youInRoom = !!currentUserId && (
    room.user1?.id === currentUserId || room.user2?.id === currentUserId
  );
  return {
    user1: room.user1 ? { name: room.user1.name, id: room.user1.id } : undefined,
    user2: room.user2 ? { name: room.user2.name, id: room.user2.id } : undefined,
    ready,
    youInRoom,
  };
}

export function joinRoom(id: string, user: RoomUser): "ok" | "full" | "already" | "not_found" {
  const room = rooms.get(id);
  if (!room) return "not_found";
  if (room.user1?.id === user.id || room.user2?.id === user.id) return "already";
  if (room.user1 && room.user2) return "full";
  if (!room.user1) room.user1 = user;
  else room.user2 = user;
  return "ok";
}

export function getRoomWithTokens(id: string): Room | undefined {
  return rooms.get(id);
}
