"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const get_sent_and_received_messages_dto_1 = require("./dto/get-sent-and-received-messages.dto");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async createMessage(createMessageDto) {
        await this.messagesService.createMessage(createMessageDto);
        return 'Message is sent';
    }
    async getSentMessages(sentAndReceivedDto) {
        const messages = await this.messagesService.getAllMessages();
        return messages.filter((message) => {
            return message.sender === sentAndReceivedDto.username;
        });
    }
    async getReceivedMessages(sentAndReceivedDto) {
        const messages = await this.messagesService.getAllMessages();
        return messages.filter((message) => {
            return message.recipient === sentAndReceivedDto.username;
        });
    }
    async readMessage(id) {
        return await this.messagesService.setRead(id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Post)('sent'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_sent_and_received_messages_dto_1.GetSentAndReceivedMessagesDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getSentMessages", null);
__decorate([
    (0, common_1.Post)('received'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_sent_and_received_messages_dto_1.GetSentAndReceivedMessagesDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getReceivedMessages", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "readMessage", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map