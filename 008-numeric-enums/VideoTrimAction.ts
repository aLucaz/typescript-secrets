import { User } from "./User";

/**
 * FACT 013
 * 
 * is not correct to couple your business logic into a enum class
 */

export class VideoTrimAction {
  trim(user: User, videoId: string): void {
    if (!user.canEditVideos()) {
      throw new Error(
        "User can't edit videos because it does not has enough access level"
      );
    }

    console.log(`Here we would trim the video with id ${videoId}`);
  }
}