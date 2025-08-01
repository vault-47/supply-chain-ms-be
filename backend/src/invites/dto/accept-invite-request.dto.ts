import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RegistrationRequestDto } from 'src/auth/dto/registration-request.dto';
import { Role } from 'src/shared/enums/role.enum';

export class AcceptInviteRequestDto extends RegistrationRequestDto {
  @IsEnum(Role)
  @ApiProperty({
    type: String,
    description: 'role',
    default: Role.ADMIN,
  })
  role = Role.ADMIN;
}
