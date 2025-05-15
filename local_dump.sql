--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2025-05-14 12:35:12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16400)
-- Name: employees; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA employees;


ALTER SCHEMA employees OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16431)
-- Name: employees; Type: TABLE; Schema: employees; Owner: postgres
--

CREATE TABLE employees.employees (
    id bigint NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email_id character varying(255) NOT NULL
);


ALTER TABLE employees.employees OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16430)
-- Name: employees_id_seq; Type: SEQUENCE; Schema: employees; Owner: postgres
--

CREATE SEQUENCE employees.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE employees.employees_id_seq OWNER TO postgres;

--
-- TOC entry 4808 (class 0 OID 0)
-- Dependencies: 218
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: employees; Owner: postgres
--

ALTER SEQUENCE employees.employees_id_seq OWNED BY employees.employees.id;


--
-- TOC entry 220 (class 1259 OID 16448)
-- Name: ai_chat_history; Type: TABLE; Schema: employees; Owner: postgres
--

CREATE TABLE employees.ai_chat_history (
    id bigint DEFAULT nextval('employees.employees_id_seq'::regclass) NOT NULL,
    user_messages text,
    assistant_messages text,
    system_messages text
);


ALTER TABLE employees.ai_chat_history OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16456)
-- Name: ai_personality; Type: TABLE; Schema: employees; Owner: postgres
--

CREATE TABLE employees.ai_personality (
    id bigint DEFAULT nextval('employees.employees_id_seq'::regclass) NOT NULL,
    personality character varying(255),
    user_message text
);


ALTER TABLE employees.ai_personality OWNER TO postgres;

--
-- TOC entry 4647 (class 2604 OID 16439)
-- Name: employees id; Type: DEFAULT; Schema: employees; Owner: postgres
--

ALTER TABLE ONLY employees.employees ALTER COLUMN id SET DEFAULT nextval('employees.employees_id_seq'::regclass);


--
-- TOC entry 4801 (class 0 OID 16448)
-- Dependencies: 220
-- Data for Name: ai_chat_history; Type: TABLE DATA; Schema: employees; Owner: postgres
--

COPY employees.ai_chat_history (id, user_messages, assistant_messages, system_messages) FROM stdin;
\.


--
-- TOC entry 4802 (class 0 OID 16456)
-- Dependencies: 221
-- Data for Name: ai_personality; Type: TABLE DATA; Schema: employees; Owner: postgres
--

COPY employees.ai_personality (id, personality, user_message) FROM stdin;
1	Default	
2	Chill Companion	Talk to me like a super laid-back, chill friend who just wants to vibe.
3	Enthusiastic Motivator	I need you to hype me up like the most motivational coach ever!
4	Pirate	Talk like a pirate, using old sailing terms, sea shanty vibes, and plenty of "Arrr!" in yer r
\.


--
-- TOC entry 4800 (class 0 OID 16431)
-- Dependencies: 219
-- Data for Name: employees; Type: TABLE DATA; Schema: employees; Owner: postgres
--

COPY employees.employees (id, first_name, last_name, email_id) FROM stdin;
1	example	example	example.gmail.com
9	test	test	test@test.com
10	admin	admin	admin@admin.com
\.


--
-- TOC entry 4809 (class 0 OID 0)
-- Dependencies: 218
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: employees; Owner: postgres
--

SELECT pg_catalog.setval('employees.employees_id_seq', 54, true);


--
-- TOC entry 4651 (class 2606 OID 16441)
-- Name: employees Employee_pk; Type: CONSTRAINT; Schema: employees; Owner: postgres
--

ALTER TABLE ONLY employees.employees
    ADD CONSTRAINT "Employee_pk" PRIMARY KEY (id);


--
-- TOC entry 4653 (class 2606 OID 16455)
-- Name: ai_chat_history ai_chat_history_pk; Type: CONSTRAINT; Schema: employees; Owner: postgres
--

ALTER TABLE ONLY employees.ai_chat_history
    ADD CONSTRAINT ai_chat_history_pk PRIMARY KEY (id);


--
-- TOC entry 4655 (class 2606 OID 16463)
-- Name: ai_personality ai_personality_pk; Type: CONSTRAINT; Schema: employees; Owner: postgres
--

ALTER TABLE ONLY employees.ai_personality
    ADD CONSTRAINT ai_personality_pk PRIMARY KEY (id);


-- Completed on 2025-05-14 12:35:12

--
-- PostgreSQL database dump complete
--

