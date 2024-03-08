PGDMP          	            |         
   University    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 
   University    DATABASE     �   CREATE DATABASE "University" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "University";
                postgres    false            �            1259    16405    Students    TABLE     �  CREATE TABLE public."Students" (
    "Id" integer NOT NULL,
    "Surname" character varying(50),
    "Name" character varying(50),
    "Patron" character varying(50),
    "City" character varying(50),
    "PostIndex" character varying(10),
    "Street" character varying(100),
    "Email" character varying(100),
    "PhoneNumber" character varying(20),
    "Faculty" character varying(100),
    "Specialty" character varying(100),
    "Course" integer,
    "GroupName" character varying(50)
);
    DROP TABLE public."Students";
       public         heap    postgres    false            �            1259    16404    student_main_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_main_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.student_main_id_seq;
       public          postgres    false    216            �           0    0    student_main_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.student_main_id_seq OWNED BY public."Students"."Id";
          public          postgres    false    215                       2604    16408    Students Id    DEFAULT     r   ALTER TABLE ONLY public."Students" ALTER COLUMN "Id" SET DEFAULT nextval('public.student_main_id_seq'::regclass);
 >   ALTER TABLE public."Students" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16405    Students 
   TABLE DATA           �   COPY public."Students" ("Id", "Surname", "Name", "Patron", "City", "PostIndex", "Street", "Email", "PhoneNumber", "Faculty", "Specialty", "Course", "GroupName") FROM stdin;
    public          postgres    false    216   �       �           0    0    student_main_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.student_main_id_seq', 36, true);
          public          postgres    false    215                       2606    16412    Students student_main_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Students"
    ADD CONSTRAINT student_main_pkey PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."Students" DROP CONSTRAINT student_main_pkey;
       public            postgres    false    216            �   z  x�uR�N�@]O��K�B���qC��QC\VD]hĥ���d�J�����g�D�L��=���>)Q=QAF/���2u�{����b	M(U�%)GF���&�G��<�{�p���u>@2Jin�J��\��4�.�ݣ�u��9kTN�-vP���0ܷ��|�Q_�YAK�d$������N��f2߸�
�a�
��M��-o)cde���z~�I�}��L3�K5`�n�|YTr��AMw�U�xIuz�)�͔�L�N�`�nG1n��e��F,�8#��FC�c�z)����L>h�� *�e��621����a������i���8\�F��3�En�h�G�%��y뭡�{`\�,�m�h�     