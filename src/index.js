export const AkairoClient = import('./struct/AkairoClient');
export const AkairoHandler = import('./struct/AkairoHandler');
export const AkairoModule = import('./struct/AkairoModule');
export const ClientUtil = import('./struct/ClientUtil');
export const Command = import('./struct/commands/Command');
export const CommandHandler = import('./struct/commands/CommandHandler');
export const CommandUtil = import('./struct/commands/CommandUtil');
export const Flag = import('./struct/commands/Flag');
export const Argument = import('./struct/commands/arguments/Argument');
export const TypeResolver = import('./struct/commands/arguments/TypeResolver');
export const Inhibitor = import('./struct/inhibitors/Inhibitor');
export const InhibitorHandler = import('./struct/inhibitors/InhibitorHandler');
export const Listener = import('./struct/listeners/Listener');
export const ListenerHandler = import('./struct/listeners/ListenerHandler');
export const Provider = import('./providers/Provider');
export const SequelizeProvider = import('./providers/SequelizeProvider');
export const SQLiteProvider = import('./providers/SQLiteProvider');
export const AkairoError = import('./util/AkairoError');
export const Category = import('./util/Category');
export const Constants = import('./util/Constants');
export const Util = import('./util/Util');
export const version = import('../package.json').version;

export default {
    // Core
    AkairoClient, AkairoHandler, AkairoModule, ClientUtil,

    // Commands
    Command, CommandHandler, CommandUtil, Flag,

    // Arguments
    Argument, TypeResolver,

    // Inhibitors
    Inhibitor, InhibitorHandler,

    // Listeners
    Listener, ListenerHandler,

    // Providers
    Provider, SequelizeProvider, SQLiteProvider,

    // Utilities
    AkairoError, Category, Constants, Util, version
};
