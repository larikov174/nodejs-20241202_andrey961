import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userRole = request.headers["x-role"];
    if (userRole === "user") {
      throw new ForbiddenException('Доступ запрещён: требуется роль admin')
    }
    
    return userRole === "admin";
  }
}