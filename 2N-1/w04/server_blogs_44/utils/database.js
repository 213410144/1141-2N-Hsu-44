import pg from 'pg';
const {Pool} = pg;
let pool;

if (process.env.DATABASE === 'LOCAL'){
    pool = new Pool({
host: 'localhost',
        port : '5432',
        user: 'postgres',
        password: '0000',
        database: 'postgres',
    });
  console.log('Connecting local database', pool.options.database);
} else if ((process.env.DATABASE === 'SUPABASE')) {
    pool = new Pool({
    host: process.env.SUPABASE_HSOT,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DATAABASE,
  });
console.log('Connecting Supabase', pool.options.database);
}
export default pool;
