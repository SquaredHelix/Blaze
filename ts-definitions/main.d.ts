declare class Listener {
    remove(): void
}
declare class Command {
    remove(): void
}

type ListenerFunction = (event: any) => void
type CommandFunction = (player: Player, args: any) => void

declare namespace blaze {
    function onEvent(eventName: string, listener: ListenerFunction): Listener
    function onCommand(commandName: string, listener: CommandFunction): Command
}




type ListenerFunction<Type> = (event: Type) => void
type CommandFunction = (player: Player, args: any) => void

declare namespace blaze {
    function onEvent<Type>(event: Type, listener: ListenerFunction<Type>): void
    function onCommand(commandName: string, listener: CommandFunction): void
}