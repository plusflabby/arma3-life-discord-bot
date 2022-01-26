declare module 'arma3-life-discord-bot' {
    interface ConfigObject {
        Token: string
    }
    export function Config(Config: ConfigObject): void
}