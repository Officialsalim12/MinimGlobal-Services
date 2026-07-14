import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  getUploadedFileUrl(filename: string) {
    return `http://localhost:3001/uploads/${filename}`;
  }
}
